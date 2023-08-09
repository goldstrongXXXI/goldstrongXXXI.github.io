import defaultSettings from '@/settings'

const title = defaultSettings.title || 'goldstrongXXXI.github.io'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
