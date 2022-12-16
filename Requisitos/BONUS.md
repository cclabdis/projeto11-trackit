# Bônus (opcional)

- Persistência de login
    
    Local Storage deve ser usado para armazenar as credenciais do usuário, enviadas pelo servidor. **Session Storage não deve ser utilizado**.
    
    - [ ]  Após o login, salve o objeto do usuário na máquina utilizando **Local Storage**
        
        [Artigo: Como armazenar dados no computador do usuário?](https://www.notion.so/Artigo-Como-armazenar-dados-no-computador-do-usu-rio-da9545917f514ac4bd73c91479f82ca8)
        
        [Artigo: Local Storage VS. Context API](https://www.notion.so/Artigo-Local-Storage-VS-Context-API-5da94b766d5f493c9d81bcc794e9829e)
        
    - [ ]  Ao abrir o app, verifique se há um usuário armazenado no Local Storage. Se sim, popule o UserContext com esse dado e redirecione o usuário direto para a tela inicial do app, evitando que ele faça login novamente
- Tela Histórico (rota `/historico`)
    - [ ]  Nesta tela deve ser exibido um calendário, conforme layout
        - 💡 **Dica**: Utilize a biblioteca `react-calendar`
    - [ ]  No calendário, deve ser exibido em verde os dias em que o usuário completou todos os hábitos que deveria ter completado (ex: tinha 3 hábitos para fazer e completou os 3)
        - 💡 **Dica**: Explore a prop `formatDay` que a biblioteca aceita e, para manipular data, pesquise pela biblioteca `dayjs`
    - [ ]  Já os dias que o usuário tinha hábitos para completar, porém não completou todos, devem ser destacados em vermelho (ex: tinha 3 hábitos pra fazer mas só completou 2)
        - 💡 **Dica**: mesmas dicas acima
    - [ ]  Nos dias que o usuário não tinha nenhum hábito a concluir, não devem ser destacados (continuam com o fundo branco)
- Clique no dia
    - [ ]  No calendário da tela de Histórico, quando o usuário clicar em um dia em destaque (verde ou vermelho), exiba a lista de hábitos do dia clicado, indicando quais hábitos ele concluiu ou não (layout livre)
        - 💡 **Dica**: Explore a prop `onClickDay` da biblioteca