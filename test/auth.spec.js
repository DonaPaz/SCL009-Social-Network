import { validateNewUser, validateEmail, validatePassLength } from '../src/assets/js/validator.js';


describe('validateNewUser',()=>{
  it('deberia retornar false si el usuario no ingresa nombre',()=>{
    expect(validateNewUser ('','lisa.simpson@gmail.com','mypass')).toBe(false);        
  })

  it('deberia retornar true si el usuario ingresa todos los campos',()=>{
    expect(validateNewUser ('Lisa','lisa.simpson@gmail.com','mypass')).toBe(true);
  })
  
  it('deberia retornar false si el usuario no completa los campos de registro',()=>{
    expect(validateNewUser ('','','')).toBe(false);
  })
  
})


describe('validatePassLength', ()=>{

  it('debería retornar true si la contraseña tiene 6 o más caracteres',()=>{
    expect(validatePassLength('mypass')).toBe(true);
  })
 
  it('debería retornar false si la contraseña tiene 6 o más caracteres',()=>{
    expect(validatePassLength('pass')).toBe(false);
  })

})

describe('validateEmail',()=>{
  it('deberia retornar false, si el correo es invalido',()=>{
    expect( validateEmail('mi-correo.com')).toBe(false);
  })
  
  it('deberia retornar true, si el correo es valido',()=>{
    expect( validateEmail('micorreo@servidormail.com')).toBe(true);
  })

})

