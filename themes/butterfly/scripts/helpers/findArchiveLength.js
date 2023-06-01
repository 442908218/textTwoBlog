hexo.extend.helper.register('findArchiveLength', function (func) {
<<<<<<< HEAD
  const allPostsLength = this.site.posts.length
  if (hexo.config.archive_generator && hexo.config.archive_generator.enable === false) return allPostsLength
=======
  const allPostsLength = this.site.posts.length;
  if (hexo.config.archive_generator && hexo.config.archive_generator.enable === false ) return allPostsLength
>>>>>>> e5e3a0e (my blog first commit)
  const { yearly, monthly, daily } = hexo.config.archive_generator
  const { year, month, day } = this.page
  if (yearly === false || !year) return allPostsLength

  const posts = this.site.posts.sort('date')

<<<<<<< HEAD
  const compareFunc = (type, y1, m1, d1, y2, m2, d2) => {
=======
  const compareFunc = (type,y1,m1,d1,y2,m2,d2) => {
>>>>>>> e5e3a0e (my blog first commit)
    if (type === 'year') {
      return y1 === y2
    } else if (type === 'month') {
      return y1 === y2 && m1 === m2
    } else if (type === 'day') {
      return y1 === y2 && m1 === m2 && d1 === d2
    }
  }

  const generateDateObj = (type) => {
<<<<<<< HEAD
    const dateObj = []
    let length = 0

    posts.forEach(post => {
      const date = post.date.clone()
      const year = date.year()
      const month = date.month() + 1
      const day = date.date()
      const lastData = dateObj[length - 1]
=======
    let dateObj = []
    let length = 0

    posts.forEach(post => {
      let date = post.date.clone()
      const year = date.year()
      const month = date.month() + 1
      const day = date.date()
      let lastData = dateObj[length - 1]
>>>>>>> e5e3a0e (my blog first commit)

      if (!lastData || !compareFunc(type, lastData.year, lastData.month, lastData.day, year, month, day)) {
        const name = type === 'year' ? year : type === 'month' ? `${year}-${month}` : `${year}-${month}-${day}`
        length = dateObj.push({
          name,
          year,
          month,
          day,
          count: 1
        })
      } else {
        lastData.count++
      }
<<<<<<< HEAD
    })
=======
    });
>>>>>>> e5e3a0e (my blog first commit)

    return dateObj
  }

<<<<<<< HEAD
  const data = func('createArchiveObj', () => {
=======
  const data = func('createArchiveObj', ()=> {
>>>>>>> e5e3a0e (my blog first commit)
    const yearObj = yearly ? generateDateObj('year') : []
    const monthObj = monthly ? generateDateObj('month') : []
    const dayObj = daily ? generateDateObj('day') : []
    const fullObj = [...yearObj, ...monthObj, ...dayObj]
    return fullObj
  })

  const name = month ? day ? `${year}-${month}-${day}` : `${year}-${month}` : year
  return data.find(item => item.name === name).count
<<<<<<< HEAD
})
=======
})
>>>>>>> e5e3a0e (my blog first commit)
