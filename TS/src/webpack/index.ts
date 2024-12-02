  (() => {
    const form: HTMLFormElement | null = document.querySelector("#form");
    const formFields: any = form?.querySelectorAll("input");

    form?.addEventListener("submit", e => {
      e.preventDefault();
      if(handleSubmit()) {
        form.submit();
      }

      
      function handleSubmit(): boolean {
        let valid = true; 
        const errorMessagesArray: NodeListOf<HTMLSpanElement> = document.querySelectorAll(".error-message");

        if(errorMessagesArray) {
          errorMessagesArray.forEach(msg => {
            for(const input of formFields) {
              if(!input.value) {
                msg.textContent = "All the field must to be filled";
                input.style.borderColor = "red";

                valid = false;
              }
            }
          })
        }
        
        if(!valid) {
          alert(`form not sended`);
        }


        return valid;
      }
    })
  })()
