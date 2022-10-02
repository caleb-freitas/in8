import { inferProcedureInput } from '@trpc/server';
import { Form, FormInput, FormLabel, FormSubmit, useFormState } from 'ariakit';

import { AppRouter } from '../server/trpc/router';
import { trpc } from '../utils/trpc';

import type { NextPage } from "next";

type RegistrationSignupInput = inferProcedureInput<AppRouter['registration']['signup']>;

const RegistrationForm: NextPage = () => {
  const utils = trpc.useContext();
  
  const form = useFormState<RegistrationSignupInput>({
    defaultValues: {
      birthDate: "",
      email: "",
      name: "",
      phoneNumber: ""
    }
  })

  const { mutate, error } = trpc.registration.signup.useMutation()

  form.useSubmit(() => mutate(form.values))

  return (
    <>
      <div className="bg-mid-blue p-12">
        <Form state={form} className="flex flex-col w-full bg-mid-blue items-center">
          {error && error.message}
          <h1 className="text-white text-2xl font-helvetica">CADASTRO</h1>
          <div className='flex flex-col'>
            <FormLabel name={form.names.name} className="text-white font-roboto-regular">Nome</FormLabel>
            <FormInput
              placeholder="Insira seu nome"
              name={form.names.name}
              required
              className="border-b-[1px] border-white focus:outline-none w-96 bg-mid-blue text-white placeholder:text-white  font-helvetica mb-4"
            />
            <FormLabel name={form.names.email} className="text-white font-roboto-regular">E-mail</FormLabel>
            <FormInput
              placeholder="seu@email.com"
              name={form.names.email}
              required
              className="border-b-[1px] border-white focus:outline-none w-96 bg-mid-blue text-white placeholder:text-white font-helvetica mb-4"
            />
            <FormLabel name={form.names.email} className="text-white font-roboto-regular">Nascimento</FormLabel>
            <FormInput
              placeholder="01/01/1900"
              name={form.names.birthDate}
              required
              className="border-b-[1px] border-white focus:outline-none w-96 bg-mid-blue text-white placeholder:text-white font-helvetica mb-4"
            />

            <FormLabel name={form.names.email} className="text-white font-roboto-regular">Telefone</FormLabel>
            <FormInput
              placeholder="(xx) 9 9999-9999"
              name={form.names.phoneNumber}
              required
              className="border-b-[1px] border-white focus:outline-none w-96 bg-mid-blue text-white placeholder:text-white mb-8 font-helvetica"
            />
          </div>
          <FormSubmit className="bg-dark-blue w-48 p-2 text-mid-blue text-2xl font-helvetica">CADASTRAR</FormSubmit>
        </Form>
      </div>
      <div>
        <h1 className="text-2xl text-helvetica text-mid-blue text-center m-8">LISTA DE CADASTROS</h1>
      </div>
    </>
  )
};

export default RegistrationForm;