// Atualiza a data atual no rodapé
document.addEventListener('DOMContentLoaded', function() {
    // Formatar e exibir a data atual
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });
    
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        dateElement.textContent = formattedDate;
    }
    
    // Adicionar animação suave ao rolar
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(section);
    });
    
    // Ativar a primeira seção imediatamente
    if (sections.length > 0) {
        sections[0].style.opacity = 1;
        sections[0].style.transform = 'translateY(0)';
    }
    
    // Adicionar botão de impressão
    const printButton = document.createElement('button');
    printButton.innerHTML = '<i class="fas fa-print"></i> Imprimir Currículo';
    printButton.className = 'print-button';
    printButton.onclick = () => window.print();
    
    const header = document.querySelector('header');
    if (header) {
        header.appendChild(printButton);
    }
});

// Adicionar estilo para o botão de impressão
const style = document.createElement('style');
style.textContent = `
    .print-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: var(--secondary-color);
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 0.9rem;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        transition: background-color 0.3s, transform 0.2s;
    }
    
    .print-button:hover {
        background-color: #2980b9;
        transform: translateY(-2px);
    }
    
    .print-button i {
        font-size: 1.1rem;
    }
    
    @media print {
        .print-button {
            display: none;
        }
    }
`;

document.head.appendChild(style);
