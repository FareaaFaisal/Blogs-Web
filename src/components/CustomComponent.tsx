import { PortableTextComponents } from "@portabletext/react";

export const components:PortableTextComponents = {
    block:{
        
        h1: ({children})=><h1 className="text-3xl font-bold mt-10 mb-10">{children}</h1>,
        h2: ({children})=><h2 className="text-3xl font-bold text-rose-900 mt-10 mb-6">{children}</h2>,
        h3: ({children})=><h3 className="text-3xl font-bold text-red-900 mt-10 mb-6">{children}</h3>

    },

   listItem: {
        bullet:({children})=><li className="list-disc mt-4 ml-12 marker:text-accentDarkSecondary list-inside">{children}</li>,
        number: ({ children }) =><li className="list-decimal mt-4 ml-12  marker:text-accentDarkSecondary list-inside">{children}</li>
        
    },

    marks:{
        strong:({children})=><strong className="font-bold text-black dark:text-white">{children}</strong>
    }
}