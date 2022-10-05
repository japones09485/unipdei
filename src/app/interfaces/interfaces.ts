export interface Perfil {
  id?: string;
  nombre?: string;
}

export interface Paises{
  id: number;
  iso: string;
  nombre : string;
  sigla : string;
  flag : string;
}


export interface ResLogin {
  status: boolean;
  token: string;
  user: Usuario;
  mensaje?:string;
}

export interface Carreras {
  id: number;
  nombre: string;
  descripcion: string;
  fecha_creacion:string;
  estado:number;
  foto1:number;
  foto2:number;
  foto3:number;
}


export interface Cursos {
  id: number;
  nombre: string;
  descripcion: string;
  fecha_creacion:string;
  estado:number;
  foto1:number;
  foto2:number;
  foto3:number;
}

export interface Diplomados {
  id: number;
  nombre: string;
  descripcion: string;
  fecha_creacion:string;
  estado:number;
  foto1:number;
  foto2:number;
  foto3:number;
}

export interface Respprogras {
  id: number;
  nombre: string;
  descripcion: string;
  fecha_creacion:string;
  estado:number;
  foto1:number;
  foto2:number;
  foto3:number;
  pro_id:number;
  pro_nombres:string;
  pro_apellidos:string;
}


export interface Usuario{
  usu_id: number;
  usu_identificacion: number;
  usu_nombres: string;
  usu_apellidos: string;
  usu_descrip_profesional: string;
  usu_email: string;
  usu_textoclaro: string;
  usu_password: string;
  usu_perfil: number;
  usu_pais: string
  usu_estado: number;
  usu_telefono?: string;
  fk_curso?:number;
  usu_cod_verificacion:string;
  usu_estado_verificacion:number;

}

export interface Profesores{
  pro_id: number;
  pro_identificacion: number;
  pro_nombres: string;
  pro_apellidos: string;
  pro_descrip_profesional: string;
  pro_email: string;
  pro_textoclaro: string;
  pro_password: string;
  pro_perfil: number;
  pro_pais: string
  pro_estado: number;
  pro_telefono?: string;
  pro_cod_verificacion:string;
  pro_estado_verificacion:number;

}


export interface Program_Profesores{
  id: number;
  identifi: number;
  nombre: string;
  email: string;
  telefono?: string;
  estado: number;
}


export interface Alumnos{
  alum_id: number;
  alum_identificacion: number;
  alum_nombres: string;
  alum_apellidos: string;
  alum_descrip_profesional: string;
  alum_email: string;
  alum_textoclaro: string;
  alum_password: string;
  alum_perfil: number;
  alum_pais: string
  alum_estado: number;
  alum_telefono?: string;
  alum_cod_verificacion:string;
  alum_estado_verificacion:number;

}

export interface cant_programas{
  cant_carrera: number;
  cant_diplomado: number;
  alum_nombres: string;

}

export interface Examen{
  id_examen: number;
  nombre: string;
  descripcion: string;
  fecha_creacion: string;
  fk_profesor: number;
  fk_programa:number;
  fk_tipo_programa:number;
  fecha_inicio: string;
  fecha_fin: string;
  numero_preguntas: number;
  num_preg_aprobar:number;
  estado:number;
  status_edit:number;
  duracion:number;
  tipo_examen:number;
}

export interface Pregunta{
  id_pregunta: number;
  fk_examen: number;
  numero_pregunta: number;
  enunciado: string;
  tipo_pregunta: number;
}

export interface Respuesta{
  id_respuesta: number;
  fk_pregunta: number;
  fk_examen:number;
  orden: number;
  texto_respuesta: string;
  fk_tipo_preg: string;
}

export interface Resultados{
  nombre: string;
  fecha_inicio: string;
  fecha_fin: string;
  fecha_plazo: string;
  fecha_nota: boolean;
  culitativo:string
}

export interface alumRecuperta{
  id: string;
  nombre_examen:string
  alumno: string;
  aliado: string;
  email: string;
  fecha: string;

}

export interface info_detalle{
  alumno: string;
  examen: string;
  fecha_finalizacion : string;
  fecha_limite : string;
  inicio : string;
}

export interface detalle_preg{
  calificacion: string;
  enunciado: string;
  fk_estado : number;
  fk_examen : number;
  id_pregunta : number;
  numero_pregunta : number;
  resp_alumno : string;
  resp_true : string;
  tipo_pregunta:string

}

export interface trabajos{
  id: number;
  nombre: string;
  descripcion : string;
  ruta_arch : string;
  fecha_creacion : string;
  fk_profesor : number;
  fk_programa : string;
  fk_tipo_programa : string;
  fecha_inicio:string;
  fecha_fin:string;
  estado:string

}

export interface Resultados{
  nombre: string;
  fecha_inicio: string;
  fecha_fin: string;
  fecha_plazo: string;
  fecha_nota: boolean;
  culitativo:string
}

export interface Videos{
  vid_id: number;
  vid_titulo: string;
  vid_descripcion: string;
  vid_fk_profesor: number;
  vid_fk_programa: number;
  vid_fk_tipo_programa:number;
  vid_fecha_creacion: string;
  vid_ruta: string;
  vid_estado:number
}

export interface trabajos_alumnos{
  comentario:string;
  vid_id: number;
  fk_trabajo: string;
  fk_alumno: string;
  fk_programa: number;
  fk_tipo_programa: number;
  fk_profesor:number;
  ruta_arch: string;
  fecha: string;
}

export interface clases{
  clas_id:number;
  clas_nombre: string;
  clas_descripcion: string;
  clas_fecha_inicio: string;
  clas_hora: number;
  clas_fecha_creacion: number;
  fk_tipo_programa:number;
  fk_programa: number;
  fk_profesor: number;
  estado: number;
}
