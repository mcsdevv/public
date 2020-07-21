import React from 'react'
import ReactDOM from 'react-dom'
import tw from 'twin.macro'

interface Props {
  onClickOutside: any
  onKeyDown: any
}
export default class Modal extends React.PureComponent<Props> {
  public render(): React.ReactElement<ModalProps> {
    // eslint-disable-next-line no-unused-vars
    const noop = tw``
    const { props } = this

    return ReactDOM.createPortal(
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div
        tw="fixed flex items-center justify-center p-4 inset-0"
        onClick={props.onClickOutside}
        onKeyDown={props.onKeyDown}
      >
        <div tw="fixed inset-0 transition-opacity">
          <div tw="absolute inset-0 bg-gray-500 opacity-75 transition-opacity" />
        </div>
        {props.children}
      </div>,
      document.body,
    )
  }
}
