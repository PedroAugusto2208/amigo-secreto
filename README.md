# Sorteio de Amigo Secreto

Este é um aplicativo simples de **Amigo Secreto** feito com HTML, CSS e JavaScript. O objetivo deste projeto é permitir que os usuários adicionem amigos à lista e realizem um sorteio de amigo secreto de forma interativa. A aplicação valida a entrada do usuário, exibe a lista de amigos e gera um sorteio aleatório para determinar os amigos secretos.

## Funcionalidades

- **Adicionar amigos:** O usuário pode adicionar amigos à lista.
- **Validação de entrada:** O campo de nome é validado para garantir que não fique vazio e que o nome não seja duplicado.
- **Sortear amigo secreto:** Após adicionar amigos à lista, o usuário pode clicar em "Sortear amigo" para realizar o sorteio. O sistema sorteia um amigo secreto aleatoriamente.
- **Exibir resultados:** O nome do amigo sorteado é exibido ao usuário.

## Tecnologias Utilizadas

- **HTML:** Estrutura da página e layout da interface.
- **CSS:** Estilização da página para um visual moderno e responsivo.
- **JavaScript:** Lógica de interação, manipulação do DOM e realização do sorteio.

## Como Usar

### Pré-requisitos

Antes de começar, certifique-se de que você tenha um navegador moderno (como Google Chrome, Firefox, etc.) para visualizar a aplicação.

### Passos para rodar o projeto

1. **Clone este repositório:**

    ```bash
    git clone https://github.com/SEU_USUARIO/amigo-secreto.git
    ```

2. **Abra o arquivo HTML no navegador:**

    Navegue até a pasta do projeto e abra o arquivo `index.html` no seu navegador preferido.

    ```bash
    cd amigo-secreto
    open index.html  # ou abra diretamente no seu navegador
    ```

### Interações:

1. **Adicionar um amigo:**
   - Digite o nome de um amigo no campo de entrada e clique em **Adicionar**.
   - A lista de amigos será atualizada automaticamente.
   
2. **Realizar o sorteio:**
   - Após adicionar pelo menos dois amigos, o botão **Sortear amigo** ficará disponível.
   - Clique em **Sortear amigo** para que o sistema sorteie um amigo secreto aleatoriamente.

3. **Exibir o resultado:**
   - O nome do amigo sorteado será exibido abaixo do botão de sorteio.

### Exemplo de Uso

1. **Adicionar amigos:**  
   - Nome 1: João
   - Nome 2: Maria
   - Nome 3: José

2. **Sortear amigo secreto:**
   - O sistema exibirá: *José sorteou Maria* e *Maria sorteou João*.
