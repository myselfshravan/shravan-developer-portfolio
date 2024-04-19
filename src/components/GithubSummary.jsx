function GithubSummary() {
  return (
    <section id="github-summary" className="container mx-auto py-16">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
        My Github Summary
      </h2>
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
        📊 My GitHub Stats
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        <img
          src="https://github-readme-stats.vercel.app/api?username=myselfshravan&theme=dracula&hide_border=true&include_all_commits=false&count_private=false"
          alt="GitHub Stats"
          className="rounded-lg"
        />
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=myselfshravan&theme=dracula&hide_border=true"
          alt="GitHub Streak Stats"
          className="rounded-lg"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=myselfshravan&theme=dracula&hide_border=true&include_all_commits=false&count_private=false&layout=compact"
          alt="Top Languages"
          className="rounded-lg"
        />
      </div>

      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
        🏆 My GitHub Trophies
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <img
          src="https://github-profile-trophy.vercel.app/?username=myselfshravan&theme=radical&ryo-ma&row=2&column=3"
          alt="GitHub Trophies"
          className="rounded-lg"
        />
        <img
          src="https://github-profile-trophy.vercel.app/?username=githubhosting&theme=radical&ryo-ma&row=2&column=3"
          alt="GitHub Trophies (2nd Account)"
          className="rounded-lg"
        />
      </div>

      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
        📊 GitHub Stats of 2nd Account
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <img
          src="https://github-readme-stats.vercel.app/api?username=githubhosting&theme=dracula&hide_border=true&include_all_commits=false&count_private=false"
          alt="GitHub Stats (2nd Account)"
          className="rounded-lg"
        />
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=githubhosting&theme=dracula&hide_border=true"
          alt="GitHub Streak Stats (2nd Account)"
          className="rounded-lg"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=githubhosting&theme=dracula&hide_border=true&include_all_commits=false&count_private=false&layout=compact"
          alt="Top Languages (2nd Account)"
          className="rounded-lg"
        />
      </div>
    </section>
  );
}

export default GithubSummary;
