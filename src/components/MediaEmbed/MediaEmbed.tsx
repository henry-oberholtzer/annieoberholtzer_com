import Image from 'next/image';

interface MediaEmbedProps {
  src: string[],
  date: string,
  width?: number,
  height?: number,
  title?: string,
  description: string,
}

interface MediaGroupProps {
  src: string[],
  width?: number,
  height?: number,
  desc: string,
}

interface MediaRenderProps {
  src: string,
  width?: number,
  height?: number,
  desc: string,
}

const MediaRender = (props: MediaRenderProps) => {
  const {src, width, height, desc } = props;
  const urlRegex = /(youtube)|(vimeo)/gi;
  const mp4Regex = /(.mp4)/gi;
  if (src.match(urlRegex)) {
    return (
      <iframe>
        
      </iframe>
    )
  } else if (src.match(mp4Regex)) {
    return (
      <video>

      </video>
    )
  }
  return (
    <Image src={`${src}`} alt={desc} width={width} height={height} />
  )
}

const MediaGroup = (props: MediaGroupProps) => {
  return props.src.map((src, i) => {
    return (
      <MediaRender key={i} src={src} width={props.width} height={props.height} desc={props.desc} />
    )
  })
}

const MediaEmbed = (props: MediaEmbedProps) => {
  const media = MediaGroup({ desc: props.description, src: props.src, width: props.width, height: props.height});
  const title = props.title ? (<h3>{props.title}</h3>) : "";
  const date = props.date ? (<p>{props.date}</p>) : "";
  const desc = props.description ? (<p>{props.description}</p>) : "";
  return (
    <div>
      {media}
      {title}
      {date}
      {desc}
    </div>
  )
}

export default MediaEmbed;
