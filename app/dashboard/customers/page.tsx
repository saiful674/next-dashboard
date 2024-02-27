import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page() {
  const customers = await fetchFilteredCustomers('');
  console.log(customers);
  return (
    <div>
      <CustomersTable customers={customers} />
    </div>
  );
}
