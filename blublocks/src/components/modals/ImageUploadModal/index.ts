/* eslint-disable max-lines-per-function, max-statements */

import { ChangeEvent, DragEvent, FormEvent, useState } from "react"
import ImageUploadModal from "./ImageUploadModal"
import prepareComponent from "@bluframe/grapple/prepareComponent"

export interface Props {
  additionalMessage?: string
  errorMessage?: string
  currentImageId?: string
  isAddImageLoading?: boolean
  isDeleteImageLoading?: boolean
  isDisabled?: boolean
  onClose: () => void
  // eslint-disable-next-line no-unused-vars
  onSubmit: (data: FormData) => void
  message?: string
}

export interface ComponentProps extends Omit<Props, "onSubmit"> {
  imageDataUrl: string | null
  isLoading: boolean
  isUploadDisabled: boolean
  // eslint-disable-next-line no-unused-vars
  onDragOver: (event: DragEvent<HTMLElement>) => void
  // eslint-disable-next-line no-unused-vars
  onFileDrop: (event: DragEvent<HTMLElement>) => void
  // eslint-disable-next-line no-unused-vars
  onFileSelect: (event: ChangeEvent<HTMLInputElement>) => void
  // eslint-disable-next-line no-unused-vars
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

const ALLOWED_IMAGES_TYPES = ["image/jpeg", "image/png", "image/webp"]
const DEFAULT_IMAGE_DATA_URL = null
const FIRST_FILE = 0

export const usePrepareComponent = (props: Props): ComponentProps => {
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(
    DEFAULT_IMAGE_DATA_URL
  )
  const [data, setData] = useState<File | null>(null)

  const onPrepareImageUploadModal = (eventFile: File) => {
    if (eventFile && ALLOWED_IMAGES_TYPES.includes(eventFile.type)) {
      setData(eventFile)

      const reader = new FileReader()
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setImageDataUrl(reader.result)
        }
      }
      reader.readAsDataURL(eventFile)
    }
  }

  const onFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      onPrepareImageUploadModal(event.target.files[FIRST_FILE])
    }
  }

  const onFileDrop = (event: DragEvent<HTMLElement>) => {
    event.preventDefault()
    onPrepareImageUploadModal(event.dataTransfer.files[FIRST_FILE])
  }

  const onDragOver = (event: DragEvent<HTMLElement>) => {
    event.preventDefault()
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (data) {
      const formData = new FormData()
      formData.append("image", data, data.name)
      formData.append("name", data.name)

      props.onSubmit(formData)
    }
  }

  const isLoading = Boolean(
    props.isAddImageLoading || props.isDeleteImageLoading
  )
  const isDisabled = props.isDisabled || isLoading
  const isUploadDisabled = !imageDataUrl

  return {
    ...props,
    imageDataUrl,
    isDisabled,
    isLoading,
    isUploadDisabled,
    onDragOver,
    onFileDrop,
    onFileSelect,
    onSubmit
  }
}

export default prepareComponent<Props, ComponentProps>(usePrepareComponent)(
  ImageUploadModal
)
