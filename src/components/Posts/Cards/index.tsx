import React from 'react'

import { Dot, Card, CardTitle, CardExcerpt, CardMetaData } from './styles'

type Props = {
  post: any
}

export const PostCard: React.FC<Props> = ({ post }: Props) => {
  const {
    timeToRead,
    fields: { slug },
    frontmatter: { title, tldr, date },
  } = post.node
  const prettyDate = new Intl.DateTimeFormat(`default`, {
    year: `numeric`,
    month: `short`,
    day: `numeric`,
    timeZone: `America/Los_Angeles`,
  }).format(Date.parse(date))
  return (
    <Card to={slug}>
      <CardTitle>{title}</CardTitle>
      <CardMetaData>
        <span>Published </span>
        <time dateTime={date}>{prettyDate}</time>
        <Dot>&middot;</Dot>
        <span>{timeToRead} min read</span>
      </CardMetaData>
      <CardExcerpt>{tldr}</CardExcerpt>
    </Card>
  )
}

export default PostCard
