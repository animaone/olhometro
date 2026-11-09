// ==UserScript==
// @name         Olhômetro — Olhe Antes de Comprar
// @namespace    olhometro.reduflacao
// @version      1.0.0
// @description  Em tempos de reduflação, alerta sobre tamanho, peso, volume, quantidade e espessura antes de você comprar.
// @author       animaone
// @match        *://*.shopee.com.br/*
// @match        *://*.aliexpress.com/*
// @grant        none
// @run-at       document-idle
//
// @source       https://github.com/animaone/olhometro/
// ==/UserScript==

(function () {
    'use strict';

    // Evita duplicar caso o script rode mais de uma vez
    if (document.getElementById('alerta-compra-placa')) return;

    // ===== Estilo da placa =====
    const style = document.createElement('style');
    style.textContent = `
        #alerta-compra-placa {
            position: fixed !important;
            left: 12px !important;
            bottom: 12px !important;
            z-index: 2147483647 !important;
            background: #ffcc00 !important;
            color: #000 !important;
            border: 3px solid #d40000 !important;
            border-radius: 10px !important;
            padding: 12px 16px !important;
            font-family: Arial, Helvetica, sans-serif !important;
            font-size: 15px !important;
            font-weight: bold !important;
            line-height: 1.4 !important;
            box-shadow: 0 6px 20px rgba(0,0,0,0.35) !important;
            text-align: left !important;
            max-width: 260px !important;
            user-select: none !important;
            cursor: grab !important;
            animation: alertaPulse 1.6s ease-in-out infinite !important;
        }

        #alerta-compra-placa .titulo {
            color: #d40000 !important;
            font-size: 16px !important;
            margin-bottom: 6px !important;
            text-align: center !important;
            display: block !important;
        }

        #alerta-compra-placa ul {
            margin: 0 !important;
            padding-left: 18px !important;
            list-style: none !important;
        }

        #alerta-compra-placa li {
            padding: 1px 0 !important;
        }

        #alerta-compra-placa li::before {
            content: "⚠ ";
            color: #d40000 !important;
        }

        #alerta-compra-placa .fechar {
            position: absolute !important;
            top: 4px !important;
            right: 8px !important;
            background: none !important;
            border: none !important;
            font-size: 16px !important;
            font-weight: bold !important;
            color: #d40000 !important;
            cursor: pointer !important;
            padding: 0 !important;
            line-height: 1 !important;
        }

        @keyframes alertaPulse {
            0%, 100% { transform: scale(1); }
            50%      { transform: scale(1.03); }
        }

        @media (max-width: 480px) {
            #alerta-compra-placa {
                font-size: 12px !important;
                max-width: 180px !important;
                padding: 8px 10px !important;
                left: 6px !important;
                bottom: 6px !important;
            }
        }
    `;
    document.head.appendChild(style);

    // ===== Elemento da placa =====
    const placa = document.createElement('div');
    placa.id = 'alerta-compra-placa';
    placa.innerHTML = `
        <button class="fechar" title="Fechar">✕</button>
        <span class="titulo">OLHE ANTES DE COMPRAR!</span>
        <ul>
            <li>OLHE O TAMANHO</li>
            <li>OLHE O PESO</li>
            <li>OLHE O VOLUME</li>
            <li>OLHE A QUANTIDADE</li>
            <li>OLHE A ESPESSURA</li>
        </ul>
    `;

    document.body.appendChild(placa);

    // Botão fechar
    placa.querySelector('.fechar').addEventListener('click', (e) => {
        e.stopPropagation();
        placa.remove();
    });

    // ===== Arrastar (opcional) =====
    let arrastando = false;
    let offsetX = 0, offsetY = 0;

    placa.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('fechar')) return;
        arrastando = true;
        const rect = placa.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
        placa.style.cursor = 'grabbing';
        placa.style.animation = 'none';
    });

    document.addEventListener('mousemove', (e) => {
        if (!arrastando) return;
        placa.style.left = (e.clientX - offsetX) + 'px';
        placa.style.top = (e.clientY - offsetY) + 'px';
        placa.style.bottom = 'auto';
    });

    document.addEventListener('mouseup', () => {
        if (!arrastando) return;
        arrastando = false;
        placa.style.cursor = 'grab';
    });

})();
