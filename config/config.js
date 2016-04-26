var CONFIG = CONFIG || {};
CONFIG.prompt = function(cwd, user) {
   if (user)
      return '<span class="user">' + user +
          '</span>@<span class="host">sotan.github.io</span>:<span class="cwd">' +
          cwd + '</span>$ ';
   return 'sotan.github.io 1.0 $ ';
};
CONFIG.username = '';
