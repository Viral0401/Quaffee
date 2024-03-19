import streamlit as st
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from mlxtend.frequent_patterns import association_rules, apriori

# Load the data
df = pd.read_csv("Sales.csv")

# Define functions for your analysis and visualizations
def analyze_data(df):
    null_sum = df.isnull().sum()
    columns_to_drop = null_sum[null_sum >= 90].index
    df.drop(columns=columns_to_drop, inplace=True)
    
    return null_sum, df.head()

def show_top_selling_items(df):
    df['Timestamp'] = pd.to_datetime(df['Timestamp'])
    top_items = pd.DataFrame(df['Item_Name'].value_counts(dropna=True, sort=True)).reset_index()
    top_items.columns = ['item', 'count']
    top_items = top_items.head(20)

    plt.figure(figsize=(30, 12))
    sns.barplot(x='item', y='count', data=top_items, palette='viridis')
    plt.xlabel('Items', size=15)
    plt.ylabel('Count of Items', size=15)
    plt.title('Top 20 best selling items', size=20)
    plt.xticks(rotation=45, ha='right')

    st.pyplot()

def show_transaction_distribution(df):
    df['Timestamp'] = pd.to_datetime(df['Timestamp'])
    qty_hr = df.groupby('hour', as_index=False)['Transaction'].count()
    qty_hr['hour_bins'] = pd.cut(x=qty_hr.hour, bins=range(0, 24, 1))

    plt.figure(figsize=(8, 5))
    sns.barplot(x='Transaction', y='hour_bins', data=qty_hr, palette='viridis')
    plt.xlabel('Count of Items', size=12)
    plt.ylabel('Hours', size=12)
    plt.title('Quantity Sold by Hours', size=15)

    st.pyplot()

def show_market_basket_analysis(df):    
    transactions = df.groupby(['Transaction', 'Item_Name'])['Item_Name'].count().reset_index(name='Count')
    my_basket = transactions.pivot_table(index='Transaction', columns='Item_Name', values='Count', aggfunc='any').fillna(0)
    frequent_items = apriori(my_basket, min_support=0.01, use_colnames=True)
    rules = association_rules(frequent_items, metric="lift", min_threshold=1.2)
    
    st.write("Association Rules:")
    st.write(rules)

# Streamlit App
def main():
    st.title("Sales Data Analysis and Visualization")

    # Sidebar
    st.sidebar.header("Navigation")
    page = st.sidebar.radio("Go to", ["Data Analysis", "Top Selling Items", "Transaction Distribution", "Market Basket Analysis"])

    if page == "Data Analysis":
        st.header("Data Analysis")
        null_sum, head_data = analyze_data(df)
        st.subheader("Null Values Summary:")
        st.write(null_sum)
        st.subheader("Head of the Data:")
        st.write(head_data)

    elif page == "Top Selling Items":
        st.header("Top Selling Items")
        show_top_selling_items(df)

    elif page == "Transaction Distribution":
        st.header("Transaction Distribution")
        show_transaction_distribution(df)

    elif page == "Market Basket Analysis":
        st.header("Market Basket Analysis")
        show_market_basket_analysis(df)

if __name__ == "__main__":
    main()
