function postForm(e) {
    e.preventDefault();
    axios.post("https://northwind.vercel.app/api/categories", {
      name: exampleInputEmail1.value,
      surname: exampleInputPassword1.value,
    });
    myForm.reset();
  
    setTimeout(() => {
      getFormData();
    }, 1000);
  
  }

  
  
myForm.addEventListener("submit", postForm);

function getFormData() {
    formData.innerHTML = "";
    
    axios.get("https://655ddd779f1e1093c59a0b08.mockapi.io/basket")
    .then((res) => {
        res.data.map((item) => {
            const box = document.createElement("div");
            box.innerHTML = `
            <div style="border: 1px solid black; padding:10px; border-radius:10px">
            <p>${item.name}</p>
            <button onclick="deleteFromForm(${item.id})" style="border: none; background-color: orange; color: white; padding: 3px 7px 3px 7px; border-radius: 8px;">sil</button>
            </div>
            `;
            formData.appendChild(box);
        });
    });
}

getFormData();

function deleteFromForm (id) {
    axios.delete(`hhttps://655ddd779f1e1093c59a0b08.mockapi.io/basket/${id}`)
    setTimeout(() => {
        getFormData();
      }, 1000);
}