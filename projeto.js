$(function(){

    // já cria logo uma cópia do TBODY original
    var copia = document.querySelector("#tabela tbody").outerHTML;
 
    //  $(document).on("click", ".form button", function(){
 
    //    var tr = $(this).closest("tbody");
       
    //    tr.fadeOut(400, function(){
    //      this.remove(); 
    //    }); 
 
    //  });
 
     $(".form button").on("click", function(){              
            const form = document.querySelector('.form');
            var produto = [];
         
                const id = form.querySelector('.id');
                const descricao = form.querySelector('.descricao');
                const categoria = form.querySelector('.categoria');
                const peso = form.querySelector('.peso');
                const altura = form.querySelector('.altura');
                const largura = form.querySelector('.largura');
                const comprimento = form.querySelector('.comprimento');
                const estoque = form.querySelector('.estoque');
                const datacadastro = form.querySelector('.datacadastro'); 
                const tbody = document.querySelector('.teste');
              
         
                produto.push({        
                    id: id, 
                    descricao: descricao.value,
                    categoria: categoria.value,  
                    peso: peso.value,  
                    altura: altura.value,
                    largura: largura.value,
                    comprimento: comprimento.value,
                    estoque: estoque.value,
                    datacadastro: datacadastro.value
                });
                var row = tbody.insertRow(0);
                row.innerHTML = `
                <tr>
                <td>${id}</td> 
                <td>${descricao.value}</td>  
                <td>${categoria.value}</td>  
                <td>${peso.value}</td>  
                <td>${altura.value}</td>
                <td>${largura.value}</td> 
                <td>${comprimento.value}</td>  
                <td>${estoque.value}</td>  
                <td>${datacadastro.value}</td>
                </tr>`        
            });

            function removerElemento(elementoClicado) {
                elementoClicado.closest("tr").remove(); 
              } 
   
                
        }) 

    
  
