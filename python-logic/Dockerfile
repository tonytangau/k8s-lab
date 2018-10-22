FROM python:3.7-alpine

COPY src /app
WORKDIR /app

RUN pip3 install -r package.txt \
    && python3 -m textblob.download_corpora lite

EXPOSE 5000
ENTRYPOINT ["python3"]

CMD ["server.py"]
