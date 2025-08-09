//@index('./temp/*.js', (f, _) => `import { default as ${f.name} } from '${f.path}'`)
import { default as card1 } from './temp/card1'
import { default as card2 } from './temp/card2'
import { default as card3 } from './temp/card3'
import { default as card4 } from './temp/card4'
import { default as modal1 } from './temp/modal1'
//@endindex

export const templ1 = (data) => `
<div class="md:bg-base-200 rounded-box grid grid-cols-1 gap-6 md:p-8 md:grid-cols-2">
${data.lorem.map((d) => card1(d)).join('')}              
</div>
${modal1(data)}
`
