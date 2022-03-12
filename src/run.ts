import * as core from '@actions/core';
// import * as github from '@actions/github';
import * as glob from '@actions/glob';

const run = async (): Promise<void> => {
  const patternInput = core.getInput('pattern');
  try {
    const pattern = JSON.parse(patternInput);
    if (typeof pattern !== 'string' && !Array.isArray(pattern)) {
      throw Error(`Invalid input [pattern]: ${patternInput}`)
    }
    const globber = await glob.create([...pattern].join('\n'))
    const files = await globber.glob()
    console.log(files);
  } catch (error) {
    core.error(error instanceof Error ? error.message : JSON.stringify(error))
  }
};

export default run;
