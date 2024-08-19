## Como usar JS no EJS

<%= %> -> dessa forma, todos os caracteres colocados noq for renderizado são exibidos (inclusive tags html ,css ou js serão exibidas e não executadas)

<%- %> -> dessa maneira, tags html, css ou js serão executadas em vez de exibidas

<% %> -> dessa forma, pode ser executado qualquer código js sem exibir

<%# %> -> comentário

<%- include(CAMINHO/ARQUIVO)%> -> inclue arquivos, como fosse um require ou um import