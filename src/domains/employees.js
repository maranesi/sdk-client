import EmployeePage from 'features/employees/EmployeePage';
import { baseURL } from 'config';

export const domain = 'employees';
export const labels = {
  list: {
    title: 'Colaboradores',
  },
};

export const customPages = {
  registration: EmployeePage,
};

export const initialColumns = [
  'avatar',
  'id',
  'name',
  'email',
  'phone',
  'product_alias',
];

export const config = [
  {
    id: 'avatar',
    type: 'avatar',
    disablePadding: false,
    label: 'Avatar',
    align: 'left',
    nested: {
      ref: 'id',
      tooltip: 'name',
      domain: 'employees',
    },
  },
  {
    id: 'name',
    type: 'link',
    baseUrl: 'employees',
    disablePadding: false,
    label: 'Nome',
    align: 'left',
  },
  {
    id: 'email',
    type: 'string',
    disablePadding: false,
    label: 'Email',
    align: 'left',
  },
  {
    id: 'email_innovation',
    type: 'string',
    disablePadding: false,
    label: 'Email Inovação',
    align: 'left',
  },
  {
    id: 'phone',
    type: 'string',
    disablePadding: false,
    label: 'Phone',
    align: 'left',
  },
  {
    id: 'role',
    type: 'string',
    disablePadding: false,
    label: 'Papel',
    align: 'left',
  },
  {
    id: 'company',
    type: 'string',
    disablePadding: false,
    label: 'Consultoria',
    align: 'left',
  },
  {
    id: 'investidor_code',
    type: 'string',
    disablePadding: false,
    label: 'Código do Projeto',
    align: 'left',
  },
  {
    id: 'product_alias',
    type: 'string',
    disablePadding: false,
    label: 'Alias Projeto',
    align: 'left',
  },
  {
    id: 'product',
    type: 'string',
    disablePadding: false,
    label: 'Produto',
    align: 'left',
  },
];

export const sections = {
  information: [
    {
      label: 'Dados Pessoais',
      fields: [
        { field: 'id', label: 'Código:' },
        { field: 'name', label: 'Nome:' },
        { field: 'alias', label: 'Apelido:' },
        { field: 'username', label: 'Username:' },
        { field: 'email', label: 'Email:' },
        { field: 'email_innovation', label: 'Email Inovação:' },
        { field: 'phone', label: 'Telefone:' },
        { field: 'birthday', label: 'Aniversário:' },
        { field: 'years', label: 'Idade:' },
      ],
    },
    {
      label: 'Social',
      fields: [
        { field: 'linkedin', label: 'Linkedin:' },
        { field: 'email_personal', label: 'E-mail:' },
      ],
    },
    {
      label: 'Documentos',
      fields: [
        { field: 'register_number', label: 'RG:' },
        { field: 'document_number', label: 'CPF:' },
      ],
    },
  ],
  contract: [
    {
      label: 'Investidor',
      fields: [
        { field: 'investidor_code', label: 'Cód. Projeto:' },
        { field: 'product', label: 'Produto Padrão:' },
        { field: 'product_alias', label: 'Alias Produto:' },
        { field: 'month_hours', label: 'Qnt Horas Mensais:' },
        { field: 'hour_value', label: 'Valor/Hora:', type: 'real' },
        { field: 'month_value', label: 'Valor/Mês:', type: 'real' },
      ],
    },
    {
      label: 'Dados Contratuais',
      fields: [
        { field: 'contract_type', label: 'Contrato:' },
        { field: 'company', label: 'Empresa:' },
        { field: 'start_date', label: 'Data de Inicio:' },
        { field: 'role', label: 'Papel:' },
        { field: 'seniority', label: 'Senioridade:' },
      ],
    },
  ],
  internal: [
    {
      label: 'Onboarding',
      fields: [{ field: 'has_badge', label: 'Crachá:' }],
    },
  ],
};

const parameters = {
  baseUrl: baseURL,
  config,
  customPages,
  domain,
  initialColumns,
  labels,
  sections,
};

export default parameters;
