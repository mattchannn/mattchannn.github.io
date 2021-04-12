# Theme Used

[Mediumish GoHugo Theme](https://github.com/lgaida/mediumish-gohugo-theme)
This theme for gohugo is a customized port based on the Mediumish Jekyll-Theme by WowThemesNet. The original theme ships with a few more features than this ported version but i also added features which the original version did not include.

See the [Demo](https://lgaida.github.io/mediumish-gohugo-theme-demo/)

# Installation
Go to your Hugo site folder
>　$ cd themes
>
>　$ git clone https://github.com/lgaida/mediumish-gohugo-theme

# Run Hugo Server
> Run `hugo server -w -v`
>
> OR
>
> Run `hugo server -w -v`

# Automate deployment via GitHub Actions
* create a dir (.github/workflows) and a file (gh-pages.yml)
* [register a deploy key](https://www.morling.dev/blog/automatically-deploying-hugo-website-via-github-actions/)
* define workflow
  * ${{ secrets.ACTIONS_DEPLOY_KEY }} should follow the naming convention of secret of the repo

# Reference
1. [actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)