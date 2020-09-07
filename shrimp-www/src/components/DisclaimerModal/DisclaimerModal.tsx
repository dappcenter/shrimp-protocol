import React, { useCallback, useState, useMemo } from 'react'

import Button from '../Button'
import CardIcon from '../CardIcon'
import Modal, { ModalProps } from '..//Modal'
import ModalActions from '..//ModalActions'
import ModalTitle from '..//ModalTitle'

interface DisclaimerModal extends ModalProps {
  onConfirm: () => void
}

const DisclaimerModal: React.FC<DisclaimerModal> = ({ onConfirm, onDismiss }) => {

  const [step, setStep] = useState('disclaimer')

  const handleConfirm = useCallback(() => {
    onConfirm()
    onDismiss()
  }, [onConfirm, onDismiss])

  const modalContent = useMemo(() => {
    if (step === 'disclaimer') {
      return (
        <div>
          <p>Audits: None. (This project is in beta. Use at your own risk.)</p>
          <p>🦐 New Advanced Pool will start on 2020/09/09 10:00:00 UTC+0, welcome our new <a href="https://frens.link/" target="_blank">Frens</a> on board. 🦐 </p>
          {/* <p>🍣 New Advanced Pool will start on 2020/09/01 10:00:00 UTC+0, welcome <a href="https://app.sushiswap.org/" target="_blank">SHRIMP_SUSHI_UNI_LP</a> on board. 🍣 </p> */}
          <br/><p>🚨 For more information on the inflation of Uniswap LP pool tokens, please visit <a href="https://github.com/shrimp-finance/shrimp-protocol/wiki/Total-Shrimp:-244,230.76-%F0%9F%A6%90" target="_blank">Github Wiki</a></p>
          <p>💡 Any token in Advanced Pool does not constitute an investment opinion, Shrimp Group is only responsible for basic quick check! Please evaluate yourself carefully before buying!</p>
        </div>
      )
    } else {
      return (
        <div>
          <p>Attention SHRIMP Uniswap LPs</p>
          <p>The only Uniswap pool that is compatible with SHRIMP is SHRIMP/WETH</p>
          <p>Providing liquidity for other Uniswap pools is dangerous</p>
        </div>
      )
    }
  }, [step])

  const button = useMemo(() => {
    if (step === 'disclaimer') {
      // return (
      //   <Button text="Next" variant="secondary" onClick={() => setStep('uniswap')} />
      // )
      return (
        <Button text="I understand" onClick={handleConfirm} />
      )
    } else {
      return (
        <Button text="I understand" onClick={handleConfirm} />
      )
    }
  }, [setStep, step, handleConfirm])

  return (
    <Modal>
      <ModalTitle text={`Warning`} />
      <CardIcon>⚠️</CardIcon>
      {modalContent}
      <ModalActions>
        {button}
      </ModalActions>
    </Modal>
  )
}


export default DisclaimerModal