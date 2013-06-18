### Intro

This is a kickstart project landing page template made by [Mu-An](http://muan.co) using [Jekyll](http://jekyllrb.com).<br />
It is **pain-free** to set up even if you are not tech-savvy, here's a live demo: [http://kickstarter.muan.co/](http://kickstarter.muan.co/), and here's some of the basics about this project just so you have an idea:

1. The template is biult using Jekyll, but there's no need to worry if you don't know what it is
2. Everything can be personalised in the file called `_config.yml`
3. You should be able to set up **absolutely everything** without leaving GitHub
4. The page would be hosted using GitHub pages, and it is soooo easy
5. The url will look something like this: `http://[your_username].github.io/`, and [you can use a custom domain](https://help.github.com/articles/setting-up-a-custom-domain-with-pages) if you have one.

Inspired by [Soma's landing page project](https://github.com/somawater/kickstarter), originally made for [Stair Rover](http://www.stair-rover.com) and now for everyone.

#

### Instruction

1. You will need to have a [GitHub account](https://github.com/signup/free).
2. [Fork](https://github.com/muan/kickstarter/fork) this repository (Feel free to ignore the terminology and just click the link)
3. You will now have a clone under your account, now go to `https://github.com/[your_username]/kickstarter/settings` and change your repository name to `[your_username].github.io`
4. Now personalise the project page by going to `https://github.com/[your_username]/[your_username].github.io/edit/gh-pages/_config.yml`. <br />After you're done, just click on **Commit Changes**.
5. You should be all set to go now, how nice! Go to `http://[your_username].github.io/` to see if it works!

#

### If you know your way around code

Here's a list of things that could be easily modified:

1. CSS styles:<br/>
  The styles are written in SCSS, `rake` command is available for you to autocompile css files and run jekyll.

2. Themes:<br />
  Currently there is only one theme, the **basic** one. Feel free to develop your own in the `theme` folder and/or send a pull request in, but remember to make all information generic and easy to set using only the config file.

3. More stuff<br />
  As mentioned, the whole thing is built on Jekyll, so just explore [Jekyll](http://jekyllrb.com) and you'll find wonders.

4. Adding more pages<br />
  It is as easy as adding a file. Say you'd like a update page, just create a `update-june.md` using markdown or `update-june.html` using html with content like:
  ```
  ---
  layout: default
  ---

  June Update:

  Hello everyone!
  ```

  And you will be able to see the page through `/update-june`. How nice!

#

### Contact

[Twitter](https://twitter.com/muanchiou), [Blog](http://muan.co), [Email](mailto:hi@muan.co)