import React, { useState } from 'react';

const GitActions = () => {
  const [commitMessage, setCommitMessage] = useState('');

  const handleGitAction = async (action) => {
    let requestBody = { action };

    if (action === 'commit') {
      if (!commitMessage) {
        alert('Please enter a commit message');
        return;
      }
      requestBody.message = commitMessage;
    }

    try {
      const response = await fetch('/api/gitActions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      if (data.success) {
        alert(data.message);
      } else {
        alert('Error: ' + data.error);
      }
    } catch (err) {
      alert('Error during git operation: ' + err.message);
    }
  };

  return (
    <div className="git-actions bg-gray-800 p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold text-white mb-4">Git Actions</h2>
      
      <div className="mb-4">
        <label htmlFor="commitMessage" className="text-lg text-white mb-2 block">Commit Message:</label>
        <input
          type="text"
          id="commitMessage"
          value={commitMessage}
          onChange={(e) => setCommitMessage(e.target.value)}
          placeholder="Enter commit message"
          className="w-full p-3 rounded-md text-gray-900 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => handleGitAction('commit')}
          className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Commit Changes
        </button>
        <button
          onClick={() => handleGitAction('push')}
          className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Push Changes
        </button>
        <button
          onClick={() => handleGitAction('pull')}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Pull Changes
        </button>
      </div>
    </div>
  );
};

export default GitActions;
