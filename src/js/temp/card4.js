const temp = (el) => `
<div class="card compact side bg-base-100 shadow-lg">
    <div class="card-body flex-row items-center space-x-4">
        <div>
            <div class="avatar">
                <div class="h-14 w-14 rounded-full shadow">
                    <img src="${el.img}" alt="" width="32" height="32">
                </div>
            </div>
        </div>
        <div>
            <h2 class="card-title">${el.heading}</h2>
            <p class="text-base-content text-opacity-40">${el.sub}</p>
        </div>
    </div>
</div>
`
export default temp

/* 

${el.heading}
${el.sub}
${el.name}
${el.info}
${el.img}
${el.url} 


heading, sub, name, info, img, url
*/
