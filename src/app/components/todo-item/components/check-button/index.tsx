import Image from 'next/image'
import check from 'public/check.svg';
import * as Checkbox from '@radix-ui/react-checkbox';
import styles from './styles.module.scss'

interface CheckButtonProps {
    onCheckToDo: () => void
}

export function CheckButton({onCheckToDo}: CheckButtonProps) {
    return (
        <Checkbox.Root className={styles.checkButton} onCheckedChange={onCheckToDo}>
            <Checkbox.Indicator className={styles.checkMark} asChild>
                <Image src={check} width={30} height={30} alt="check icon" />
            </Checkbox.Indicator>
        </Checkbox.Root>
    )};