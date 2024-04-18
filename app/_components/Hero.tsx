/* eslint-disable @next/next/no-img-element */
import { Section } from "./Section"

export const Hero = () => {
    return (
        <Section className="flex max-lg:flex-col items-start">
            <div className="flex-[2]">
                <h2 className="font-caption text-5xl">Rova Fitia</h2>
                <h3>Software Engineer</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat doloribus ipsam tempora voluptas. Et eaque consectetur odio assumenda tenetur deleniti veritatis aspernatur quae commodi, eligendi doloremque aperiam ducimus. Aspernatur saepe officia dolores? Ex ratione recusandae autem nihil ipsa. Facilis blanditiis sequi nostrum laudantium veritatis eos dolor at magnam earum asperiores!</p>
            </div>
            <div className="flex-1">
                <img src="https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full max-w-sm h-auto" alt="Photo" />
            </div>
        </Section>
    )
}