# Theme Used
[Mediumish GoHugo Theme](https://github.com/lgaida/mediumish-gohugo-theme)
This theme for gohugo is a customized port based on the Mediumish Jekyll-Theme by WowThemesNet. The original theme ships with a few more features than this ported version but i also added features which the original version did not include. See the [Demo](https://lgaida.github.io/mediumish-gohugo-theme-demo/)

Other themes have inspired Mat
- [AllinOne Theme](https://github.com/orianna-zzo/AllinOne)
- [Hugo Theme Even](https://github.com/olOwOlo/hugo-theme-even)


# Before Jump Into the Project
Contributors must know what [content organization](https://gohugo.io/content-management/organization/), page template and taxonomoy are.
Basically under the whole content organization, we could divide the layout type into 3 types and each of them are responsible to a corresponding page bundle.

1. Home page (is also a kind of branch bundle)
    - Home page itself would have a home page template (layouts/index.html). `_index.md` can control front matter and content of a home page such as `{{ .Title }}` & `{{ .Content }}`.

2. Leaf bundle

    - It references a _**single**_ layout type
    - Page bundle is to manage your own page resources (make sure other bundle couldn't touch it!).
    - index file name (optional): `index.md`

3. Branch bundle
    - It references a _**list**_ layout type
    - Page bundle is to manage your own page resources (make sure other bundle couldn't touch it!).
    - index file name (optional): `_index.md`


Other than `single.html` and `list.html` you can use in _default folder. Thanks to [template lookup order](https://gohugo.io/templates/lookup-order/), you can also define your own section (i.e.: documentation) and use `single.html` & `list.html` in a newly created folder called `documentation`.

[Content type](https://gohugo.io/content-management/types/#readout) is being used with section template.
**Please make sure that the content type (if any) has the same name with your layout folder (i.e.: documentation)**

It will cause an error and make your template looks up to _default folder.


## Taxonomies

  - You can treat this as a custom categories for your pages.
      - Default taxonomies by HUGO: **tags** and **categories**
  - Once you have declared your own custom taxonomies. HUGO would generate a page regarding to your taxonomies using [taxonomy template](https://gohugo.io/templates/taxonomy-templates/). 


Taxonomy Structure
```sh
├── tag # taxnomies
|   ├── git # terms
|       └── abc.md # value
|   ├── javascript # terms
        └── def.md # value
```
For example, a taxonomy called **categories** would have a page listed all terms within the taxonomy (a.k.a categories) and within each terms, a page listed all value (blog post page) will be generated as well.


## Front Matter
  - Apart from the pre-defined/user-defined front matter key that you can use in your config.toml. `cascade` can also be used to indicate a value from **ancestor to descendents**.
  
  Lets use the below folder structure as an example

```sh
├── /content/blog # root folder
|   ├── _index.md # branch bundle
|   ├── blog-post-1 
|       └── blogpost1.md
|   ├── blog-post-2
|       └── blogpost2.md
```
Config in `_index.md`
  ```bash
  [cascade]
      banner: 'images/sample.jpg'
  ```

It means .Params.banner (value => images/sample.jpg) can be access from each of the children under /content/blog (e.g.: `blogpost1.md` & `blogpost2.md`) unless the below scenarios happen.
1. Descendants (e.g.: `blogpost1.md`) has its own banner value set. The new value will override the one you set in `_index.md`.
2. A closer node has its own banner value set. Technically speaking, HUGO would look for the closest node and its cascaded banner value.

# Content Format - Goldmark
In this project, Goldmark is used after HUGO release [v0.60.0](https://gohugo.io/news/0.60.0-relnotes/).

[Configuration](https://gohugo.io/getting-started/configuration-markup/)
  1. unsafe // if you would like to use inline HTML in a markdown file
  2. attribute // _TO BE DISCOVERD_


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
- [FreeLogoDesign](https://www.freelogodesign.org/)
    - [logo editor](https://editor.freelogodesign.org/en/logo/edit/4432f994c8104f138d4054d32cd54535?template=22104323&category=11&companyName=M)

# Code Linting
[SonarQube]() for IDE such as Visual Studio Code

[SonarCloud](https://sonarcloud.io/projects) for public projects

# Powered By
1. [Bootstrap](https://getbootstrap.com/)
2. [Font Awesome 6](https://fontawesome.com/)
3. [Add This](https://www.addthis.com/)

# Reference
1. [actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)
2. [page variable & site variable](https://gohugo.io/variables/page/)