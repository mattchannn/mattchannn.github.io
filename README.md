# Theme Used

[Mediumish GoHugo Theme](https://github.com/lgaida/mediumish-gohugo-theme)
This theme for gohugo is a customized port based on the Mediumish Jekyll-Theme by WowThemesNet. The original theme ships with a few more features than this ported version but i also added features which the original version did not include.

See the [Demo](https://lgaida.github.io/mediumish-gohugo-theme-demo/)

Reference
> [AllinOne Theme](https://github.com/orianna-zzo/AllinOne)

# Before Jump Into the Project
Contributor must know what [content organization](https://gohugo.io/content-management/organization/) is.

Inside /content/, we have page bundles which can be a leaf bundle or branch bundle. 
We can have a path breakdown in HUGO, for example, a single page content (null-undefined.md)
```sh

```

> Page Bundle
  - can be a leaf bundle or branch bundle

# Installation
Go to your Hugo site folder
>　$ cd themes
>
>　$ git clone https://github.com/lgaida/mediumish-gohugo-theme themes/mediumish-gohugo-theme

# Run Hugo Server
> Run `hugo server -w -v`
>
> OR
>
> Run `hugo server -w -v`

## Folder Structure

```sh

├── .github # Stored the github workflow actions, for auto build pipeline
├── archetypes # Template consisted of pre-configured front matter for new posts. Output:
├── content # Stored home page, single page and list page (e.g.: blog posts)
├── layout # Stored page layout, template
|   ├── 
|   ├── 
|   |   ├── 
|   |   |   └── 
|   |   └── 
├── public # Output folder when building the site
├── static # Stored resources that a website need
|   ├── css
|   ├── fonts
|   ├── images
|   ├── js
├── themes # (Optional) Place of theme resides
├── .gitignore
├── .gitmodules # Default: modules to build hugo site due to the config in config.toml
├── config.toml # Site config file
```

# Automate deployment via GitHub Actions
* create a dir (.github/workflows) and a file (<_sampleName_>.yml)
* [register a deploy key](https://www.morling.dev/blog/automatically-deploying-hugo-website-via-github-actions/)
* define workflow
  * ${{ secrets.ACTIONS_DEPLOY_KEY }} should follow the naming convention of secret of the repo

# Blog Icon Provider
1. [FreeLogoDesign](https://www.freelogodesign.org/)
    - [logo editor](https://editor.freelogodesign.org/en/logo/edit/4432f994c8104f138d4054d32cd54535?template=22104323&category=11&companyName=M)

# Powered By
1. [Bootstrap](https://getbootstrap.com/)
2. [Font Awesome 6](https://fontawesome.com/)
3. [Add This](https://www.addthis.com/)

# Reference
1. [actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)
2. [page variable & site variable](https://gohugo.io/variables/page/)