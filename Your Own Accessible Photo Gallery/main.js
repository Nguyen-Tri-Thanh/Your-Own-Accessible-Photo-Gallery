const images = [
    {
      src: "1.jpg",
      alt: "Field of vibrant sunflowers",
      description: "A beautiful field of vibrant sunflowers basking in the sunlight."
    },
    {
      src: "2.jpg",
      alt: "Lush green forest with tall trees",
      description: "A lush green forest filled with tall trees."
    },
    {
      src: "3.jpg",
      alt: "Serene ocean waves at sunset",
      description: "Serene ocean waves lapping at the shore during sunset."
    },
    {
      src: "4.jpg",
      alt: "Snow-capped mountains under a blue sky",
      description: "Snow-capped mountains under a clear blue sky."
    },
    {
      src: "5.jpg",
      alt: "City skyline at night with bright lights",
      description: "A vibrant city skyline lit up at night."
    },
    {
      src: "6.jpg",
      alt: "Golden sand dunes stretching across a vast desert",
      description: "Golden sand dunes stretching across a vast desert."
    }
  ];
  
  function initGallery() {
    const gallery = document.getElementById('gallery');
  
    images.forEach((image, index) => {
      const imgContainer = document.createElement('div');
      imgContainer.className = 'image-container';
   
      const img = document.createElement('img');
      img.src = image.src;
      img.alt = image.alt;
      img.tabIndex = 0;
      img.addEventListener('click', () => openLightbox(index));
      img.addEventListener('focus', () => img.classList.add('focus'));
      img.addEventListener('blur', () => img.classList.remove('focus'));
      
      img.addEventListener('mousemove', (event) => {
        console.log(`Mouse moved over ${image.alt} at (${event.clientX}, ${event.clientY})`);
      });
  
      const description = document.createElement('div');
      description.className = 'image-description';
      description.textContent = image.description;
  
      imgContainer.appendChild(img);
      imgContainer.appendChild(description);
      gallery.appendChild(imgContainer);
    });
  }
  
  function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxDescription = document.getElementById('lightbox-description');
  
    lightboxImage.src = images[index].src;
    lightboxImage.alt = images[index].alt;
    
    lightboxDescription.textContent = images[index].description;
  
    lightbox.style.display = 'flex';
    lightboxImage.focus();
  
    lightbox.onclick = () => {
      closeLightbox();
    };
  }

    setTimeout(() => {
      imgContainers.forEach(container => {
        const desc = container.querySelector('.image-description');
        desc.style.opacity = 0;
      });
    }, 3000);

  function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
  }

  document.addEventListener('keydown', (event) => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.style.display === 'flex') {
      if (event.key === 'Escape') {
        closeLightbox();
      } else if (event.key === 'ArrowRight') {
        let currentIndex = images.findIndex(image => image.src === document.getElementById('lightbox-image').src);
        currentIndex = (currentIndex + 1) % images.length;
        openLightbox(currentIndex);
      } else if (event.key === 'ArrowLeft') {
        let currentIndex = images.findIndex(image => image.src === document.getElementById('lightbox-image').src);
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        openLightbox(currentIndex);
      }
    }
  });