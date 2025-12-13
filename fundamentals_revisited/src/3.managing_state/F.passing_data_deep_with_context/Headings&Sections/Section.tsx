import { useContext } from "react"
import { LevelContext } from "../LevelContext"

interface SectionProps {
    children: React.ReactNode
}

export default function Section({ children }: SectionProps) {
    const level = useContext(LevelContext)
    return (
        <section>
            <LevelContext value={level + 1}>
                {children}
            </LevelContext>
        </section>
    );
}