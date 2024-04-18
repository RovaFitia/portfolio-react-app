import { Button, buttonVariants } from "@/components/ui/button"
import { Section } from "./Section"
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import Link from "next/link"
import { cn } from "@/lib/utils"

export const Header = () => {
    return (
        <header className="sticky top-0 py-4">
            <Section className="flex items-baseline">
                <h1 className="text-lg font-bold text-primary-forground">Rova Fitia</h1>
                <div className="flex-1"/>
                <ul className="flex items-center gap-4">
                    <Link href="https://github.com/RovaFitia" className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}>
                        <FaGithub className="text-forground" size={18}/>
                    </Link>

                    <Link href="http://twitter.com/rovaFiti" className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}>
                        <FaXTwitter className="text-forground" size={18}/>
                    </Link>

                    <Link href="https://github.com/RovaFitia" className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}>
                        <FaLinkedin className="text-forground" size={18}/>
                    </Link>
                </ul>
            </Section>
        </header>
    )
}