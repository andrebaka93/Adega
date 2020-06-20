using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Text;

namespace AcessoDados
{
	public static class ADUtils
	{
		public static DataTable ConverterParaDataTable<T>(IEnumerable<T> dados)
		{
			DataTable dataTable = new DataTable();
			
			if (dados == null)
				return dataTable;

			PropertyDescriptorCollection propriedades = TypeDescriptor.GetProperties(typeof(T));

			foreach (PropertyDescriptor propriedade in propriedades)
			{
				dataTable.Columns.Add(propriedade.Name, Nullable.GetUnderlyingType(propriedade.PropertyType) ?? propriedade.PropertyType);
			}

			foreach(T dado in dados)
			{
				DataRow linha = dataTable.NewRow();
				foreach(PropertyDescriptor propriedade in propriedades)
				{
					linha[propriedade.Name] = propriedade.GetValue(dado) ?? DBNull.Value;
				}
				dataTable.Rows.Add(linha);
			}

			return dataTable;
		}
	}
}
