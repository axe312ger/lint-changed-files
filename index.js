#!/usr/bin/env node
const { spawnSync } = require('child_process')
const { extname } = require('path')
const yargs = require('yargs')

const argv = yargs
  .option('ext', {
    type: 'array',
    default: ['.js']
  })
  .argv

// Get list of files which changed compared to upstream.
const gitResult = spawnSync('git', ['diff', '--name-only', '@{upstream}'])

if (gitResult.error) {
  throw gitResult.error
}

// Generate list of files to lint
const gitDiffFiles = gitResult.stdout.toString()
  // Create array of changed files
  .split(/[\n\r]/)
  // Remove empty line at the end
  .filter(Boolean)
  // Remove all files with unsupported extensions
  .filter((filename) => {
    const ext = extname(filename)
    return argv.ext.includes(ext)
  })

if (!gitDiffFiles.length) {
  console.log(`👍 No changed files found in your latest commits compared to upstream. You are all good.`)
  return
}

console.log(`🔍 Linting the following files:\n${gitDiffFiles.join('\n')}`)

// Run eslint
const eslintResult = spawnSync('npx', ['eslint', ...gitDiffFiles], {stdio: 'inherit'})

process.exit(eslintResult.status)
