// src/app/services/API.js

export const commitChanges = async (commitMessage) => {
    try {
      const response = await fetch('/api/gitActions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'commit', message: commitMessage }),
      });
  
      const data = await response.json();
      if (data.success) {
        return data.message;
      } else {
        throw new Error(data.error || 'Failed to commit changes');
      }
    } catch (error) {
      console.error('Error committing changes:', error);
      throw error;
    }
  };
  
  export const pushChanges = async () => {
    try {
      const response = await fetch('/api/gitActions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'push' }),
      });
  
      const data = await response.json();
      if (data.success) {
        return data.message;
      } else {
        throw new Error(data.error || 'Failed to push changes');
      }
    } catch (error) {
      console.error('Error pushing changes:', error);
      throw error;
    }
  };
  
  export const pullChanges = async () => {
    try {
      const response = await fetch('/api/gitActions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'pull' }),
      });
  
      const data = await response.json();
      if (data.success) {
        return data.message;
      } else {
        throw new Error(data.error || 'Failed to pull changes');
      }
    } catch (error) {
      console.error('Error pulling changes:', error);
      throw error;
    }
  };
  