/* eslint-disable no-ternary, max-lines-per-function */

import {
  AdditionalMessage,
  Buttons,
  Content,
  ErrorMessage,
  FileInput,
  FileInputLabel,
  Message,
  Messages,
  UploadArea
} from "./styled"
import Button from "components/buttons/Button"
import type { ComponentProps } from "."
import ImageCanvas from "./ImageCanvas"
import React from "react"

const ImageUploadModal = ({
  additionalMessage,
  errorMessage,
  isDisabled,
  isLoading,
  isUploadDisabled,
  imageDataUrl,
  message,
  onClose,
  onDragOver,
  onFileDrop,
  onFileSelect,
  onSubmit
}: ComponentProps) => (
  <Content>
    <form onSubmit={onSubmit}>
      {message ? <Message>{message}</Message> : null}
      <UploadArea onDragOver={onDragOver} onDrop={onFileDrop}>
        {imageDataUrl ? <ImageCanvas imageDataUrl={imageDataUrl} /> : null}
        <FileInput
          accept=".jpg, .jpeg, .png, .webp"
          disabled={isDisabled || isLoading}
          id="fileInput"
          onChange={onFileSelect}
          type="file"
        />
        <FileInputLabel disabled={isDisabled || isLoading} htmlFor="fileInput">
          {"Select an image"}
        </FileInputLabel>
        <Messages>
          <Message>{"Drag your images here or click in this area"}</Message>
          {additionalMessage ? (
            <AdditionalMessage>{additionalMessage}</AdditionalMessage>
          ) : null}
          {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
        </Messages>
      </UploadArea>
      <Buttons>
        <Button
          disabled={isDisabled || isLoading}
          label="Cancel"
          onClick={onClose}
          outlined
        />
        <Button
          disabled={isDisabled || isUploadDisabled || isLoading}
          label="Upload"
          loading={isLoading}
          type="submit"
        />
      </Buttons>
    </form>
  </Content>
)

export default ImageUploadModal
