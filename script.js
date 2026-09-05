document.addEventListener("DOMContentLoaded", () => {

    const readButton = document.querySelector("#readStories");
    const writeButton = document.querySelector("#writeStory");

    const stories = document.querySelector("#stories");
    const writeSection = document.querySelector("#write");

    const photoInput = document.querySelector('input[type="file"]');
    const photoPreview = document.querySelector("#photoPreview");


    // Читать истории
    if (readButton && stories) {
        readButton.addEventListener("click", () => {

            stories.classList.remove("hidden");

            stories.scrollIntoView({
                behavior: "smooth"
            });

        });
    }


    // Написать историю
    if (writeButton && writeSection) {
        writeButton.addEventListener("click", () => {

            writeSection.scrollIntoView({
                behavior: "smooth"
            });

        });
    }


    // Добавление фотографий
    if (photoInput && photoPreview) {

        photoInput.addEventListener("change", () => {
            if (photoPreview.children.length >= 2) {
    alert("Можно добавить максимум 2 фотографии ❤️");
    photoInput.value = "";
    return;
}



    const files = photoInput.files;
    const filesToAdd = Array.from(files).slice(
    0,
    2 - photoPreview.children.length
);

   for (const file of filesToAdd) {

        if (!file.type.startsWith("image/")) {
            continue;
        }

        const wrapper = document.createElement("div");
        wrapper.classList.add("photo-item");

        const image = document.createElement("img");
        image.src = URL.createObjectURL(file);
        image.classList.add("preview-image");

        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.classList.add("remove-photo");
        removeButton.textContent = "✕";

        removeButton.addEventListener("click", () => {
            wrapper.remove();
        });

        wrapper.appendChild(image);
        wrapper.appendChild(removeButton);

        photoPreview.appendChild(wrapper);
    }

});

    }

    console.log("ФОТО-СКРИПТ ЗАПУЩЕН");

});