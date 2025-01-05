
import simpleGit from 'simple-git';

const git = simpleGit();

export const commitChanges = (message) => {
  git.add('./*')
    .then(() => git.commit(message))
    .then(() => console.log('Changes committed'))
    .catch((err) => console.error('Error committing changes:', err));
};

export const pushChanges = () => {
  git.push('origin', 'main')
    .then(() => console.log('Changes pushed'))
    .catch((err) => console.error('Error pushing changes:', err));
};

export const pullChanges = () => {
  git.pull('origin', 'main')
    .then(() => console.log('Changes pulled'))
    .catch((err) => console.error('Error pulling changes:', err));
};
