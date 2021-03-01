require('fs').readdirSync('.').toString();
res.download(res2.filename);
res.redirect("/");
