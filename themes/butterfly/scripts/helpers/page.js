/**
 * Butterfly
 * @example
 *  page_description()
 *  cloudTags(source, minfontsize, maxfontsize, limit)
 */

'use strict'

const { stripHTML, escapeHTML, prettyUrls } = require('hexo-util')
const crypto = require('crypto')

hexo.extend.helper.register('page_description', function () {
  const { config, page } = this
  let description = page.description || page.content || page.title || config.description

  if (description) {
    description = escapeHTML(stripHTML(description).substring(0, 150)
      .trim()
    ).replace(/\n/g, ' ')
    return description
  }
})

hexo.extend.helper.register('cloudTags', function (options = {}) {
  const env = this
<<<<<<< HEAD
  let { source, minfontsize, maxfontsize, limit, unit, orderby, order } = options
  unit = unit || 'px'
=======
  let source = options.source
  const minfontsize = options.minfontsize
  const maxfontsize = options.maxfontsize
  const limit = options.limit
  const unit = options.unit || 'px'
>>>>>>> e5e3a0e (my blog first commit)

  let result = ''
  if (limit > 0) {
    source = source.limit(limit)
  }

  const sizes = []
  source.sort('length').forEach(tag => {
    const { length } = tag
    if (sizes.includes(length)) return
    sizes.push(length)
  })

  const length = sizes.length - 1
<<<<<<< HEAD
  source.sort(orderby, order).forEach(tag => {
=======
  source.forEach(tag => {
>>>>>>> e5e3a0e (my blog first commit)
    const ratio = length ? sizes.indexOf(tag.length) / length : 0
    const size = minfontsize + ((maxfontsize - minfontsize) * ratio)
    let style = `font-size: ${parseFloat(size.toFixed(2))}${unit};`
    const color = 'rgb(' + Math.floor(Math.random() * 201) + ', ' + Math.floor(Math.random() * 201) + ', ' + Math.floor(Math.random() * 201) + ')' // 0,0,0 -> 200,200,200
    style += ` color: ${color}`
<<<<<<< HEAD
    result += `<a href="${env.url_for(tag.path)}" style="${style}">${tag.name}</a>`
=======
    // result += `<a href="${env.url_for(tag.path)}" style="${style}">${tag.name}</a>`
    result += `<a href="${env.url_for(tag.path)}" style="${style}">${tag.name}<sup>${tag.length}</sup></a>`
>>>>>>> e5e3a0e (my blog first commit)
  })
  return result
})

<<<<<<< HEAD
hexo.extend.helper.register('urlNoIndex', function (url = null, trailingIndex = false, trailingHtml = false) {
  return prettyUrls(url || this.url, { trailing_index: trailingIndex, trailing_html: trailingHtml })
=======
hexo.extend.helper.register('urlNoIndex', function (url = null) {
  return prettyUrls(url || this.url, { trailing_index: false, trailing_html: false })
>>>>>>> e5e3a0e (my blog first commit)
})

hexo.extend.helper.register('md5', function (path) {
  return crypto.createHash('md5').update(decodeURI(this.url_for(path))).digest('hex')
})

hexo.extend.helper.register('injectHtml', function (data) {
  let result = ''
  if (!data) return ''
  for (let i = 0; i < data.length; i++) {
    result += data[i]
  }
  return result
})

hexo.extend.helper.register('findArchivesTitle', function (page, menu, date) {
  if (page.year) {
    const dateStr = page.month ? `${page.year}-${page.month}` : `${page.year}`
<<<<<<< HEAD
    const dateFormat = page.month ? hexo.theme.config.aside.card_archives.format : 'YYYY'
    return date(dateStr, dateFormat)
=======
    const date_format = page.month ? hexo.theme.config.aside.card_archives.format : 'YYYY'
    return date(dateStr, date_format)
>>>>>>> e5e3a0e (my blog first commit)
  }

  const defaultTitle = this._p('page.archives')
  if (!menu) return defaultTitle

  const loop = (m) => {
    for (const key in m) {
      if (typeof m[key] === 'object') {
        loop(m[key])
      }

      if (/\/archives\//.test(m[key])) {
        return key
      }
    }
  }

  return loop(menu) || defaultTitle
})
<<<<<<< HEAD

hexo.extend.helper.register('isImgOrUrl', function (path) {
  const imgTestReg = /\.(png|jpe?g|gif|svg|webp)(\?.*)?$/i
  if (path.indexOf('//') !== -1 || imgTestReg.test(path)) {
    return true
  }
  return false
})
=======
>>>>>>> e5e3a0e (my blog first commit)
