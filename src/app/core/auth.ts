import { signal } from "@angular/core";

//! Define valor inicial do signal usuarioLogado com (false)
export const usuarioLogado = signal (false);

//! Define Signal usuarioLogado como (true), Permite acesso as rotas
export function login () {
    usuarioLogado.set(true);
}

//! Define Signal usuarioLogado com (false), Bloqueia acesso imediato
export function logout() {
    usuarioLogado.set(false);
}