import { ImageLoaderProps } from "next/image"

export const cloudflareImageLoader = ({ src, width, quality = 75 }: ImageLoaderProps) => {
	return `https://images.kangana512.workers.dev?width=${width.toString()}&quality=${quality.toString()}&image=https://showkhon.com${src}`
}