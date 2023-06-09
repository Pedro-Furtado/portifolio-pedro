const button_home = document.getElementById("m_home")
const button_sobre = document.getElementById("m_sobre")
const button_abilidades = document.getElementById("m_abilidades")
const button_portifolio = document.getElementById("m_portfolio")
const button_chat = document.getElementById("m_chat")
const indicador_home = document.getElementById("indicador_home")
const indicador_sobre = document.getElementById("indicador_sobre")
const indicador_abilidades = document.getElementById("indicador_abilidades")
const indicador_portifolio = document.getElementById("indicador_portifolio")
const indicador_chat = document.getElementById("indicador_chat")
const section_home = document.getElementById("s_home")
const section_sobre = document.getElementById("s_sobre")
const section_abilidades = document.getElementById("s_abilidades")
const section_portifolio = document.getElementById("s_portifolio")
const section_chat = document.getElementById("s_chat")
function selecionar(
    /*botao*/botao,
    /*indicador*/ind_home,ind_sob,ind_abl,ind_port,ind_chat, 
    /*section*/section, 
    /*color*/col_home,col_sob,col_abl,col_port,col_chat )
    {
    botao.addEventListener("click", () => {
        ind_home.classList.add("show_indicate")
        ind_sob.classList.remove("show_indicate")
        ind_abl.classList.remove("show_indicate")
        ind_port.classList.remove("show_indicate")
        ind_chat.classList.remove("show_indicate")
        section.scrollIntoView({behavior: "smooth"})
        col_home.style.color = "rgb(61, 199, 134)"
        col_sob.style.color = "black"
        col_abl.style.color = "black"
        col_port.style.color = "black"
        col_chat.style.color = "black"
    })
}
function selecionar_response(
    /*botao*/botao,
    /*section*/section, 
    /*color*/col_home,col_sob,col_abl,col_port,col_chat)
    {
    botao.addEventListener("click", () => {
        section.scrollIntoView({behavior: "smooth"})
        col_home.style.color = "rgb(61, 199, 134)"
        col_sob.style.color = "black"
        col_abl.style.color = "black"
        col_port.style.color = "black"
        col_chat.style.color = "black"
    })
}
function verificarWidthTela(){
    if(window.innerWidth > 1130){
        //======== HOME =========//
        selecionar(
            button_home,
            indicador_home,
            indicador_sobre,
            indicador_abilidades,
            indicador_portifolio,
            indicador_chat,
            section_home,
            button_home,
            button_sobre,
            button_abilidades,
            button_portifolio,
            button_chat
        )
        //======== SOBRE =========//
        selecionar(
            button_sobre,
            indicador_sobre,
            indicador_home,
            indicador_abilidades,
            indicador_portifolio,
            indicador_chat,
            section_sobre,
            button_sobre,
            button_home,
            button_abilidades,
            button_portifolio,
            button_chat
        )
        //======== ABILIDADES =========//
        selecionar(
            button_abilidades,
            indicador_abilidades,
            indicador_sobre,
            indicador_home,
            indicador_portifolio,
            indicador_chat,
            section_abilidades,
            button_abilidades,
            button_home,
            button_sobre,
            button_portifolio,
            button_chat
        )
        //======== PORTIFÓLIO =========//
        selecionar(
            button_portifolio,
            indicador_portifolio,
            indicador_abilidades,
            indicador_sobre,
            indicador_home,
            indicador_chat,
            section_portifolio,
            button_portifolio,
            button_abilidades,
            button_home,
            button_sobre,
            button_chat
        )
        //======== CHAT =========//
        selecionar(
            button_chat,
            indicador_chat,
            indicador_portifolio,
            indicador_abilidades,
            indicador_sobre,
            indicador_home,
            section_chat,
            button_chat,
            button_portifolio,
            button_abilidades,
            button_home,
            button_sobre
        )
    }else{
        //======== HOME =========//
        selecionar_response(
            button_home,
            section_home,
            button_home,
            button_sobre,
            button_abilidades,
            button_portifolio,
            button_chat
        )
        //======== SOBRE =========//
        selecionar_response(
            button_sobre,
            section_sobre,
            button_sobre,
            button_home,
            button_abilidades,
            button_portifolio,
            button_chat
        )
        //======== ABILIDADES =========//
        selecionar_response(
            button_abilidades,
            section_abilidades,
            button_abilidades,
            button_home,
            button_sobre,
            button_portifolio,
            button_chat
        )
        //======== PORTIFÓLIO =========//
        selecionar_response(
            button_portifolio,
            section_portifolio,
            button_portifolio,
            button_abilidades,
            button_home,
            button_sobre,
            button_chat
        )
        //======== CHAT =========//
        selecionar_response(
            button_chat,
            section_chat,
            button_chat,
            button_portifolio,
            button_abilidades,
            button_home,
            button_sobre
        )
    }
}
window.addEventListener('resize', verificarWidthTela);
verificarWidthTela();
const btn_projeto_01 = document.getElementById("p_1")
btn_projeto_01.addEventListener("click", () => {
    window.open("https://projeto-busca-8a5ip299y-pedro-furtado.vercel.app")
})
const btn_projeto_02 = document.getElementById("p_2")
btn_projeto_02.addEventListener("click", () => {
    window.open("http://relogio-q49i7tes5-pedro-furtado.vercel.app")
})
const btn_projeto_03 = document.getElementById("p_3")
btn_projeto_03.addEventListener("click", () => {
    window.open("https://hover-effects-one.vercel.app/")
})