import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideX, lucideNfc }  from '@ng-icons/lucide';
import { NgStyle, NgFor } from '@angular/common';
import { NgIconComponent } from '@ng-icons/core';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.html',
  styleUrl: './cartao.css',
  imports: [NgStyle, NgFor, NgIconComponent],
  viewProviders: [provideIcons({ lucideX, lucideNfc })]

})
export class Cartao {

  isBack = false;

  flipCard() {
    this.isBack = !this.isBack;
  }

  stats = [
  { value: '+20', label: 'anos de experiência' },
  { value: '3',   label: 'especialidades' },
  { value: 'ITQ', label: 'e região SP' },
  ];

  services = [
    { name: 'Avaliação Psicológica', desc: 'Adultos, laudos oficiais', icon: 'lucideClipboardList', link: 'https://wa.me/5511982829179?text=Avaliação Psicológica' },
    { name: 'Neuropsicologia',       desc: 'Memória, cognição',       icon: 'lucideBrain',         link: 'https://wa.me/5511982829179?text=Neuropsicologia' },
    { name: 'Avaliação Infantil',    desc: 'TDAH, dislexia, TEA',     icon: 'lucideHeart',         link: 'https://wa.me/5511982829179?text=Avaliação Infantil' },
    { name: 'Psicoterapia',          desc: 'Presencial e online',     icon: 'lucideUser',          link: 'https://wa.me/5511982829179?text=Psicoterapia' },
  ];

  links = [
    { label: 'Site oficial',   name: 'claramente.com.br',       url: 'https://claramente.com.br',        icon: 'lucideGlobe',     bg: 'rgba(107,79,160,0.2)',   color: '#b49de0' },
    { label: 'Instagram',      name: '@clinicaclaramente',       url: 'https://instagram.com/...',        icon: 'lucideInstagram', bg: 'rgba(220,80,120,0.15)',  color: '#e8799e' },
    { label: 'Localização',    name: 'Itaquaquecetuba · SP',     url: 'https://maps.google.com/...',      icon: 'lucideMapPin',    bg: 'rgba(60,130,220,0.15)',  color: '#7eb4e8' },
    { label: 'Saiba mais',     name: 'Avaliações Psicológicas',  url: 'https://claramente.com.br/...',    icon: 'lucideFileText',  bg: 'rgba(120,191,160,0.18)', color: '#78BFA0' },
  ];
}
