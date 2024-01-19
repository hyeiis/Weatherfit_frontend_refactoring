import Image from 'next/image'
import { FormEventHandler } from 'react'

export enum InputStyle {
  INPUT_WHITE = 'INPUT_WHITE',
  INPUT_IMAGE = 'INPUT_IMAGE',
}

interface Props {
  inputStyle: InputStyle
  placeholderContents?: string
  value?: string
  style?: string
  onChageFunction?: FormEventHandler<HTMLDivElement> | undefined
}

export default function InputStore({
  inputStyle,
  placeholderContents,
  style,
  onChageFunction,
}: Props) {
  const selectInput = (): React.ReactNode => {
    switch (inputStyle) {
      case InputStyle.INPUT_WHITE:
        return (
          <input
            type="text"
            className={`border rounded-lg bg-white border-gray-500 p-1 ${style}`}
            placeholder={placeholderContents}
          />
        )
      case InputStyle.INPUT_IMAGE:
        return (
          <label htmlFor="upload_image">
            <div
              className="border rounded-2xl w-32 h-48 bg-stone-200 flex cursor-pointer hover:bg-stone-300"
              onChange={onChageFunction}>
              <Image
                className="m-auto"
                src={'/icon_svg/add.svg'}
                alt="add"
                width={20}
                height={20}
              />
              <input
                id="upload_image"
                className="hidden"
                type="file"
                accept="image/*"
                multiple
                onChange={onChageFunction}
              />
            </div>
          </label>
        )

      default:
        return null
    }
  }

  return <>{selectInput()}</>
}
