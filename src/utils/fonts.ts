/* eslint-disable camelcase */

import { Montserrat, DM_Serif_Text } from 'next/font/google'

const montserrat = Montserrat({ weight: ['300', '400', '500', '600'], subsets: ['latin-ext'], display: 'swap' })

const dmSerif = DM_Serif_Text({ weight: '400', subsets: ['latin-ext'], display: 'swap' })

export { montserrat, dmSerif }