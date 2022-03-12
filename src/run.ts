import * as core from '@actions/core';
// import * as github from '@actions/github';
import * as glob from '@actions/glob';

const run = async (): Promise<void> => {
  const pattern = core.getInput('pattern');
  const globber = await glob.create(pattern)
  const files = await globber.glob()
  console.log(files);
};

export default run;
